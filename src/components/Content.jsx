import React from 'react'
import { CgMoreO } from "react-icons/cg";

function Content() {
  return (
    <div className="second w-full border-x-2">
        <div className="top-nav flex pt-3 items-center border-b ">
          <div className='flex w-full justify-around mx-4'>
            <h6 className='border-b-4 pb-3 border-[#1d9bf0] cursor-pointer text-xs font-bold'>For you</h6>
            <h6 className='text-[#71767b] cursor-pointer text-xs'>Following</h6>
          </div>
          <div className='px-3 mb-3'>
            <CgMoreO className='cursor-pointer' />
          </div>
        </div>

        <div className="write-post py-3 px-5 border-b">
          <div className='flex gap-2'>
            <img src='../img/profile.jpg' className='border rounded-full' />
            <input type='text' placeholder='What is happening?!' className="placeholder:text-[#71767b] bg-transparent border-none outline-none" />
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className="icons flex gap-3 text-xs pt-5 pl-7 items-center">
              <CgMoreO className='cursor-pointer' />
              <CgMoreO className='cursor-pointer' />
              <CgMoreO className='cursor-pointer' />
              <CgMoreO className='cursor-pointer' />
              <CgMoreO className='cursor-pointer' />
              <CgMoreO className='cursor-pointer' />
            </div>
            <div>
              <button className='bg-[#1d9bf0] py-1 px-3 rounded-full'>Post</button>
            </div>
          </div>
        </div>

        <div className="posts">
          <div className='post border-b px-5 pb-3'>
            <div className='flex justify-between items-center py-1 my-2'>
              <div className='flex gap-2'>
                  <div className="img">
                      <img src="../img/profile.jpg" className="border w-full h-full rounded-full" />
                  </div>
                  <div className="content">
                    <p className='text-xs'>Ramgaria <span className='text-slate-600'>@Ramgaria5 . 26 Apr</span></p>
                    <p className='text-[11px] pt-1'>Potiential sleeper Project</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam fugit incidunt inventore nesciunt corrupti facilis, quo totam vitae provident nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, recusandae quisquam quas inventore debitis qui? Consectetur, provident ratione cupiditate ullam adipisci ea doloremque cumque dolores, error at pariatur fuga est!</p>
                  </div>
              </div>
              <div className='icon'>
                  <CgMoreO />
              </div>
            </div>
            <div className='flex'>
              <div className='flex justify-between text-xs pl-7 pr-2 w-full'>
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
              </div>
              <div className='text-xs'>
                <CgMoreO className='cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='post border-b px-5 pb-3'>
            <div className='flex justify-between items-center py-1 my-2'>
              <div className='flex gap-2'>
                  <div className="img">
                      <img src="../img/profile.jpg" className="border w-full h-full rounded-full" />
                  </div>
                  <div className="content">
                    <p className='text-xs'>Ramgaria <span className='text-slate-600'>@Ramgaria5 . 26 Apr</span></p>
                    <p className='text-[11px] pt-1'>Potiential sleeper Project</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam fugit incidunt inventore nesciunt corrupti facilis, quo totam vitae provident nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, recusandae quisquam quas inventore debitis qui? Consectetur, provident ratione cupiditate ullam adipisci ea doloremque cumque dolores, error at pariatur fuga est!</p>
                  </div>
              </div>
              <div className='icon'>
                  <CgMoreO />
              </div>
            </div>
            <div className='flex'>
              <div className='flex justify-between text-xs pl-7 pr-2 w-full'>
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
              </div>
              <div className='text-xs'>
                <CgMoreO className='cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='post border-b px-5 pb-3'>
            <div className='flex justify-between items-center py-1 my-2'>
              <div className='flex gap-2'>
                  <div className="img">
                      <img src="../img/profile.jpg" className="border w-full h-full rounded-full" />
                  </div>
                  <div className="content">
                    <p className='text-xs'>Ramgaria <span className='text-slate-600'>@Ramgaria5 . 26 Apr</span></p>
                    <p className='text-[11px] pt-1'>Potiential sleeper Project</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam fugit incidunt inventore nesciunt corrupti facilis, quo totam vitae provident nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, recusandae quisquam quas inventore debitis qui? Consectetur, provident ratione cupiditate ullam adipisci ea doloremque cumque d Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ipsa? Iste esse sit repudiandae odio eveniet! Voluptas aspernatur mollitia voluptate non hic deserunt voluptatum soluta, et dolor iste maiores! Error pariatur ab, voluptatum voluptas expedita consequuntur neque asperiores illum sequi. olores, error at pariatur fuga est!</p>
                  </div>
              </div>
              <div className='icon'>
                  <CgMoreO />
              </div>
            </div>
            <div className='flex'>
              <div className='flex justify-between text-xs pl-7 pr-2 w-full'>
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
                  <CgMoreO className='cursor-pointer' />
              </div>
              <div className='text-xs'>
                <CgMoreO className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content