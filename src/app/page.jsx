"use client"


import Navbar from './components/Navbar'
import SendTextArea from './components/SendTextArea'
import ReciveText from './components/ReciveText'
import { StreamlinedClipboard } from './components/streamline-clipboard';
export default function page(props) {

  return (
    <>
    <Navbar />

{/* <SendTextArea />
      <ReciveText /> */}
      <StreamlinedClipboard />
    </>
  );
}
