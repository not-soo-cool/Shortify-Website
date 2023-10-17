import React from 'react'
import './Services.css'
// import { DashboardOutlined } from '@ant-design/icons';
import { Button, Dialog, Toolbar } from '@mui/material';
import {
    Avatar,
    Box,
    ButtonBase,
    CardContent,
    ClickAwayListener,
    Grid,
    IconButton,
    Paper,
    Popper,
    Stack,
    Tab,
    Tabs,
    Typography
  } from '@mui/material';

const Services = () => {
  return (
    <div className='container' 
    style={{
        display: 'flex', 
        // justifyContent: 'space-evenly',
        justifyContent: 'center', 
        // alignItems: 'center', 
        alignContent: 'center',
        // border: '2px solid #808080',
        height: '500px',
        padding: '10px',
        margin: '20px 10px'
        }}>
            
        {/* <h1 style={{border: '5px solid #808080'}}>Service</h1>
        <span></span> 
        <h1 >Services</h1>  */}
        {/* <DashboardOutlined style={{
            // height: '200px',
        }}/>

        <Toolbar style={{
            border: '3px solid #808080'
        }}/>

        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            /> */}

            {/* <ButtonBase style={{
            border: '3px solid #808080'
        }}/>

            <CardContent style={{
            border: '3px solid #808080'
        }}/>
            {/* <ClickAwayListener style={{
            border: '3px solid #808080'
        }}/> 
            <Grid style={{
            border: '3px solid #808080'
        }}/>
            <IconButton style={{
            border: '3px solid #808080'
        }}/>
            <Paper style={{
            border: '3px solid #808080'
        }}/>
            <Popper style={{
            border: '3px solid #808080'
        }}/>
            <Stack style={{
            border: '3px solid #808080'
        }}/>
            <Tab style={{
            border: '3px solid #808080'
        }}/>
            <Tabs style={{
            border: '3px solid #808080'
        }}/>
            <Typography style={{
            border: '3px solid #808080'
        }}/> */}

        {/* <Dialog 
        className='dialog' 
        style={{
            minHeight: '400px',
            // zIndex: '101'
        }}
        >
            Comment
            <input type="text" placeholder='Name*' style={{
                // width: '50%',
                // height: '75%'
            }} />
            <input type="email" placeholder='Email*' style={{
                // width: '50%',
                // height: '75%'
                marginLeft: '10px'
            }} />
            <input type="email" placeholder='Email*' style={{
                // width: '50%',
                // height: '75%'
            }} />
        </Dialog> */}


        <Dialog 
            className='commentdia'
            // open={commentToggle} 
            // onClose={()=>setCommentToggle(!commentToggle)} 
            >

                <div className="DialogBox">
                    <Typography variant='h4' >Comments</Typography>

                    <form 
                    className='commentForm' 
                    // onSubmit={addCommentHandler}
                    >
                        <input 
                            type='text' 
                            // value={commentValue} 
                            // onChange={(e) => setCommentValue(e.target.value)}
                            placeholder='Comment here..'
                            required
                        />

                        <Button 
                            // disabled={loading}
                            type='submit' variant='contained'>
                                Add
                        </Button>
                    </form>

                    {/* {
                        comments.length > 0 ? comments.map((comment)=>(
                            <CommentCard 
                                key={comment._id}
                                userId={comment.user._id}
                                username={comment.user.username} 
                                avatar={comment.user.avatar.url}
                                comment={comment.comment}
                                commentId={comment._id} 
                                postId={postId}
                                isAccount={isAccount}
                            />
                        )) : <Typography>No comments yet</Typography>
                    } */}

                    
                </div>
        </Dialog>
    


    </div>
  )
}

export default Services
