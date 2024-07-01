'use client';

import React, { useState } from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import Image from 'next/image';
import Web3MasteryLogo from '../../assets/images/web3-mastery-logo.png';
import { HiArrowUpTray } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineEyeSlash } from 'react-icons/hi2';

function Dashboard() {
  const [showPassword, setShowPassword] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: '',
    email: '',
    bio: '',
    password: '',
    website: '',
    linkedInProfile: '',
    githubProfile: '',
    twitterProfile: '',
    youtubeProfile: '',
    resume: '',
    skills: [],
    education: [],
    experience: []
  });

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <MainAppLayout>
      <section className="dashboard-header mt-[25px] px-3 sm:px-[20px]">
        <div className="avatar-and-basic-info-wrapper flex gap-4 pb-3 mb-3">
          <Image
            src={Web3MasteryLogo}
            alt="user avatar"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col justify-center">
            <div className="poppins font-semibold">Andrew Okpainmo</div>
            <div>
              {' '}
              <span className="poppins font-semibold">
                Community Rank:
              </span>{' '}
              Newbie
            </div>
          </div>
        </div>
        <section className="dashboard-tabs-wrapper flex flex-col gap-3">
          <div className="tabs-header card-glass_dark p-2 px-3 flex justify-between py-4">
            <div className="poppins text-[12px] bg-white py-2 px-4 flex items-center justify-center text-center w-[30%]">
              Bookmarks
            </div>
            <div className="poppins text-[12px] bg-white py-2 px-4 flex items-center justify-center text-center w-[30%] shadow-lg">
              Saved Jobs
            </div>

            <div className="poppins text-[12px] bg-white py-2 px-4 flex items-center justify-center text-center w-[30%]">
              Profile
            </div>
          </div>
          <section className="dashboard-tabs-body card-glass_dark px-3 py-4">
            <div className="profile-tab">
              <div className="basic-information-form-group">
                <h3 className="poppins font-light mb-4 text-base">
                  Basic Profile Information
                </h3>
                <form className="basic-information-profile-form w-full">
                  <div className="avatar-update-wrapper relative">
                    <Image
                      src={Web3MasteryLogo}
                      alt="user avatar"
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div className="upload-icon-wrapper upload-avatar-icon-wrapper-background flex justify-center items-center w-[60px] h-[60px] rounded-full absolute top-0 left-0">
                      <HiArrowUpTray className="text-white text-[25px]" />
                    </div>
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px] mt-4">
                    <label className="poppins" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="text"
                      //   required
                      placeholder="tell us your name"
                      value={profileForm.name}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          name: e.target.value
                        });
                      }}
                      id="name"
                    />
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
                    <label className="poppins" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="email"
                      //   required
                      placeholder="please add you email"
                      value={profileForm.email}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          email: e.target.value
                        });
                      }}
                      id="email"
                    />
                  </div>
                  <div className="password input-group flex flex-col mb-6 text-[12px] sm:text-[14px] relative">
                    <label className="poppins" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="mt-2 px-4 py-3 border outline-none"
                      type={showPassword ? 'text' : 'password'}
                      //   required
                      placeholder="please input your password"
                      value={profileForm.password}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          password: e.target.value
                        });
                      }}
                      id="password"
                    />
                    <HiOutlineEye
                      className={`${showPassword ? 'hidden' : 'inline-block'} text-[20px] cursor-pointer absolute top-[38px] right-4`}
                      onClick={toggleShowPassword}
                    />
                    <HiOutlineEyeSlash
                      className={`${showPassword ? 'inline-block' : 'hidden'} text-[20px] cursor-pointer absolute top-[38px] right-4`}
                      onClick={toggleShowPassword}
                    />
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
                    <label className="poppins" htmlFor="website">
                      Website
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="website"
                      //   required
                      placeholder="please provide a link to your website"
                      value={profileForm.website}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          website: e.target.value
                        });
                      }}
                      id="website"
                    />
                  </div>
                  <div className="bio input-group flex flex-col mb-6 text-[12px] sm:text-[14px] relative">
                    <label className="poppins" htmlFor="bio">
                      Bio
                    </label>
                    <textarea
                      className="mt-2 px-3 py-3 border outline-none"
                      rows={10}
                      id="bio"
                      placeholder="please share your bio"
                      value={profileForm.bio}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          bio: e.target.value
                        });
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    //   onClick={logInUser}
                    className="submit text-center bg-black py-4 text-[12px] sm:text-[14px] text-white poppins mt-4 px-6"
                  >
                    Update
                  </button>
                </form>
              </div>
              <div className="social-profiles-form-group mt-10">
                <h3 className="poppins font-light mb-4 text-base">
                  Social Media Profiles
                </h3>
                <form className="socials-profile-form w-full">
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px] mt-4">
                    <label className="poppins" htmlFor="linkedInProfile">
                      LinkedIn
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="text"
                      placeholder="Please provide your LinkedIn profile link"
                      value={profileForm.linkedInProfile}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          linkedInProfile: e.target.value
                        });
                      }}
                      id="linkedInProfile"
                    />
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
                    <label className="poppins" htmlFor="githubProfile">
                      GitHub
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="text"
                      placeholder="Please provide your GitHub profile link"
                      value={profileForm.githubProfile}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          githubProfile: e.target.value
                        });
                      }}
                      id="githubProfile"
                    />
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
                    <label className="poppins" htmlFor="twitterProfile">
                      Twitter
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="text"
                      placeholder="Please provide your Twitter profile link"
                      value={profileForm.twitterProfile}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          twitterProfile: e.target.value
                        });
                      }}
                      id="twitterProfile"
                    />
                  </div>
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
                    <label className="poppins" htmlFor="youtubeProfile">
                      YouTube
                    </label>
                    <input
                      className="mt-2 px-3 py-3 border outline-none"
                      type="text"
                      placeholder="Please provide your YouTube channel link"
                      value={profileForm.youtubeProfile}
                      onChange={(e) => {
                        setProfileForm({
                          ...profileForm,
                          youtubeProfile: e.target.value
                        });
                      }}
                      id="youtubeProfile"
                    />
                  </div>
                  <button
                    type="button"
                    className="submit text-center bg-black py-4 text-[12px] sm:text-[14px] text-white poppins mt-4 px-6"
                  >
                    Update
                  </button>
                </form>
              </div>
              <div className="professional-profile-information-form-group mt-10">
                <h3 className="poppins font-light mb-4 text-base">
                  Professional Profile
                </h3>
                <form className="socials-profile-form w-full">
                  <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px] mt-4">
                    <label className="poppins" htmlFor="resumeUpload">
                      Upload Resume
                    </label>
                    <input
                      className="outline-none mt-4 poppins"
                      type="file"
                      id="resumeUpload"
                      //   onChange={handleFileUpload}
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </section>
    </MainAppLayout>
  );
}

export default Dashboard;
