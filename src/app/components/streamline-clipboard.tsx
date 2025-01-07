'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Send, Clipboard, Lock, File, Upload, Download, X, FileText, Share2, Eye, EyeOff, Shield, RefreshCw } from 'lucide-react'

export function StreamlinedClipboard() {
  const [activeTab, setActiveTab] = useState('share')
  const [contentType, setContentType] = useState<'text' | 'file'>('text')
  const [inputContent, setInputContent] = useState('')
  const [outputContent, setOutputContent] = useState('')
  const [otp, setOtp] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isEncrypted, setIsEncrypted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [expirationTime, setExpirationTime] = useState('5')

  const handleTextSubmit = () => {
    // if (contentType === 'text') {
    //   console.log('Sharing text:', inputContent)
    // } else {
    //   console.log('Sharing file:', selectedFile)
    // }
    // console.log('Encrypted:', isEncrypted)
    // console.log('Expiration time:', expirationTime, 'minutes')
    
    // Simulate generating a share link
    setShareLink(`https://clipboard.example.com/${Math.random().toString(36).substr(2, 9)}`)
    
    // Reset form
    setInputContent('')
    setSelectedFile(null)
    setIsEncrypted(false)
    setExpirationTime('5')
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    setSelectedFile(file)
  }

  const removeFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleReceive = () => {
    // Simulate receiving content
    if (otp === '123456') {
      setOutputContent('This is the received content.')
    } else {
      alert('Invalid OTP')
    }
  }

  const [shareLink, setShareLink] = useState('')

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Streamlined Online Clipboard</CardTitle>
        <CardDescription>Securely share text and files with ease</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'share' | 'receive')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="share">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </TabsTrigger>
            <TabsTrigger value="receive">
              <Download className="w-4 h-4 mr-2" />
              Receive
            </TabsTrigger>
          </TabsList>   
          <TabsContent value="share">
            <div className="space-y-4 mt-4">
              <div className="flex space-x-2 justify-start">
                <Button 
                  variant={contentType === 'text' ? "default" : "outline"} 
                  onClick={() => setContentType('text')}
                  className="w-24"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Text
                </Button>
                <Button 
                  variant={contentType === 'file' ? "default" : "outline"} 
                  onClick={() => setContentType('file')}
                  className="w-24"
                >
                  <File className="w-4 h-4 mr-2" />
                  File
                </Button>
              </div>
              {/* //input content is the useState variable for the text input */}
              {contentType === 'text' ? (
                <Textarea
                  placeholder="Type or paste your content here..."
                  value={inputContent}
                  onChange={(e) => setInputContent(e.target.value)}
                  className="min-h-[150px]"
                />
              ) : (
                <div className="space-y-2">
                  <Input
                    type="file"
                    onChange={handleFileSelect}
                    className='hidden'
                    ref={fileInputRef}
                    id="file-upload"
                  />
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Select File
                  </Button>
                  {selectedFile && (
                    <div className="flex items-center bg-gray-100 rounded p-2">
                      <File className="h-4 w-4 mr-2" />
                      <span className="text-sm truncate flex-grow">
                        {selectedFile.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeFile}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="encrypt-switch"
                  checked={isEncrypted}
                  onCheckedChange={setIsEncrypted}
                />
                
                <Label htmlFor="encrypt-switch">End-to-end Encryption</Label>
              </div>
              

              <div className="flex items-center space-x-2">
                <Label htmlFor="expiration-time" className="text-sm text-gray-700">Expire after:</Label>
                <select
                  id="expiration-time"
                  value={expirationTime}
                  onChange={(e) => setExpirationTime(e.target.value)}
                  className="border rounded p-1 text-sm"
                >
                  <option value="5">5 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="1440">24 hours</option>
                </select>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleTextSubmit} className="w-32">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
              
              {shareLink && (
                <div className="mt-4 p-2 bg-gray-100 rounded flex items-center justify-between">
                  <span className="text-sm truncate mr-2">{shareLink}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(shareLink)}
                  >
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="receive">
            <div className="space-y-4 mt-4">
              <Input
                type="text"
                placeholder="Enter OTP or share link"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="flex justify-end">
                <Button onClick={handleReceive} className="w-40">
                  <Lock className="mr-2 h-4 w-4" /> Verify & Receive
                </Button>
              </div>
              <Textarea
                placeholder="Received content will appear here..."
                value={outputContent}
                readOnly
                className="min-h-[150px]"
              />
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => {navigator.clipboard.writeText(outputContent); console.log("copied")}} className="w-40">
                  <Clipboard className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button variant="outline" className="w-40">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4 px-6 pb-6">
        <div className="flex items-center">
          <Shield className="h-4 w-4 mr-2" />
          Secure and encrypted
        </div>
      </div>
    </Card>
  )
}

