import React from 'react'
import { useSelector } from 'react-redux'
import {BiCommentDetail} from 'react-icons/bi'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import * as api from '../api/index'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Pusher from 'pusher-js'




const Sidebar= () => {
    const{user} = useSelector(state => state.user)
    const[rooms, setRooms] = useState([]);
    const navigate =useNavigate()
   // console.log(user)
    const persons = [
        {
            name: "Berkant",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "deneme deneme",
            date: '12-10-23'
        },
        {
            name: "Berkant",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "deneme deneme",
            date: '12-10-23'
        },
        {
            name: "Berkant",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "deneme deneme",
            date: '12-10-23'
        },
        {
            name: "Berkant",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "deneme deneme",
            date: '12-10-23'
        }
    ]

    useEffect (() => {
        const pusher = new Pusher('a328f9cd1502bfb02c92', {
        cluster: 'eu'
        });
        const channel = pusher.subscribe('rooms');
        channel.bind('inserted', function(data) {
        setRooms (prev => [...prev, data])
})
        }, [])



    useEffect(() => {
        const allRooms = async() =>{
            const {data} =await api.allRoomApi()  
            setRooms(data)
        }
        allRooms()
    },[])

    console.log(rooms, "roomsss");
    const addingPerson =async()=> {
        const newPrompt= prompt('Yeni bir ad giriniz !!!')
        console.log(newPrompt, "newPrompt")
        if(newPrompt){
            const {data} = await api.createRoomApi({groupName : newPrompt})
           // console.log(data, "data");
            
           // setRooms(prev => [...prev,data])

        }
    }

return (

<div className='w-1/4 border-r'>
    <div className = 'bg-gray-200 h-16 flex items-center justify-between p-3'>
        <img className='w-10 rounded-full' src={user?.photoURL} alt=""/>
        <div className='flex items-center gap-5'>
            <BiCommentDetail size={23} className='text-ray-600 cursor-pointer'/>
            <BsThreeDotsVertical size={23} className='text-ray-600 cursor-pointer'/>
        </div>
        <div className= 'bg-gray-100 flex items-center p-2'>
            <div className= 'bg-white flex items-center gap-2 border p-2 rounded-lg flex-1'>
                <BsSearch size={20} className="text-gray-600"/>
                <input className='outline-none border-none bg-transparent flex-1' type="text" placeholder='Arama Yapınız'/>

            </div>

        </div>
       

    </div>
    <div onClick={addingPerson}className= 'bg-green-600 text-white p-2 m-2 text-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity'>
            Yeni Kişi Ekle
        </div>
    <div>
        {
            rooms?.map((room,i) => (
                <div onClick={() => navigate(`chat/${room?._id}`)} key={i} className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-200">
                    <div className='flex items-start gap-2'>
                    <img className='w-10 rounded-full' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                    
                    <div>
                        <div className=''>{room?.name}</div> 
                        <div className = 'text-xs text-gary-700'>deneme deneme</div>
                    </div>
                        
                    </div>
                        <div className='text-xs text-gray-700'>
                            {moment(room?.createdAt).format("MMM Do YY")};
                        </div>

                    
                </div>

            ))
        }
    </div>

</div>
)

}
export default Sidebar