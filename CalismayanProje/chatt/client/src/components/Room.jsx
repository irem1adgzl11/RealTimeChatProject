import React from 'react'

const Room = ({username,room,setUsername,setRoom,setChatScreen,socket}) => {
  const sendRoom =() => {
    socket.emit('room', room)
    setChatScreen(true)

  }
  return (
   <div className='flex items-center justify-center h-full'>
    <div className='w-1/3 h-[320px] bg-indigo-600 flex flex-col space-y-4 p-3 rounded-xl'>
      <h1 className='text-center my-4 text-2xl font-bold'>WELCOME TO CHAT</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} className='h-12 p-3 outline-none rounded-xl' type="text" placeholder='Username' />
      <input value={room} onChange={e => setRoom(e.target.value)} className='h-12 p-3 outline-none rounded-xl' type="text" placeholder='Room' />
      <div onClick={sendRoom} className= 'h-12 p-2 text-xl text-center rounded-xl text-white bg-indigo-900 rounded-e-xl cursor-pointer hover:opacity-70 tracking-wider'>CHAT!!!</div>
    
    </div>
   </div>
  )
}

export default Room