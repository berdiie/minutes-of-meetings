import React from 'react'
import './home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function Home() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <div className='main'>
        <center>
        <p><h2>Generating Minutes of Meeting</h2></p>
        <br></br><br></br>
        <div id="wrapper">
            <div id="left">
                <h5 className='text1'>Daily Scrum Meeting
                <img className='icon' src='zoom.png' width={'40px'}></img></h5>
                <div className='til'>
                  <p>Zoom</p>
                  </div> 
                <br></br>
                <p className='text2'>
                  Date: {date}
                </p><br></br>
                <p className='text3'>Daily Stand Up fo Aled team working on PRD 1Project</p>
                <br></br>
                <hr></hr>
                <div className='peeps'>
                <p className='owner'>Owner</p>
                <p className='watcher'>Watcher </p>
                <p className='participants'>Participants </p>
                </div>
                <div className='avatars'>
                <div className='avatar1'>
                <Stack direction="row" spacing={2} >
                  <Avatar alt="Remy Sharp" src="" />
                </Stack>
                </div>
                <div class="vl"></div>
                <div className='avatar2'>
                <Stack direction="row" spacing={2} >
                  <Avatar alt="Remy Sharp" src="avatar/avatar1.jpg" />
                  <Avatar alt="Remy Sharp" src="avatar/avatar2.jpg" />
                  <Avatar alt="Remy Sharp" src="avatar/3.png" />

                </Stack>
                </div>
                <div class="vl"></div>
                <div className='avatar2'>
                <Stack direction="row" spacing={2} >
                  <Avatar alt="Remy Sharp" src="" />
                  <Avatar alt="Remy Sharp" src="avatar/avatar5.jpg" />
                  <Avatar alt="Remy Sharp" src="avatar/avatar6.jpg" />
                  <Avatar alt="Remy Sharp" src="avatar/avatar7.jpg" />
                  <Avatar alt="Remy Sharp" src="avatar/12.png" />
                </Stack>
                </div>
                </div>
                <br></br><br></br>
                <hr></hr>
                <br></br>
                <p className='text4'>Meeting Hour</p>
                <p className='text5'>3 hr 20 minutes</p>
            </div>
            <div id="right">
              <div className='sec01'>
              <p className='text01'>Agenda</p>
              <p className='text02'>Tasks</p>
              <button type="button" className='dv'>Detailed View</button>
              </div>
              <hr></hr>
              <p className='u0'>UX/UI Decison Making</p>
              <p className='u1'>UX/UI Products Edit</p>
              <br></br>
              <p className='note'>Notes</p>
              <br></br>
              <p className='p1'>Decision Point 1,Points- add actions have<br></br>
              Insight,Points-add actions here<br/>
              Discussion,Points-add actions here</p>
              <p className='res'>Resources<p className='link'>(Download Links)</p></p>
              <p className='load'>Sales.ppt &nbsp;&nbsp;<a href="path/to/ppt/file.ppt" download>
              <img src="load.png" width="10" height="14"></img></a></p>
            </div>
        </div></center>
    </div><br></br>
   
    </>
  )
}






