"use client"

import { Card } from '@web3uikit/core';
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Image from 'next/image';

export default function ProjectCard({ _imageSrc, _codeSrc, _title, _description, children }: {
  _imageSrc: string,
  _codeSrc: string,
  _title: string,
  _description: string,
  children: React.ReactNode
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("Card clicked");
    console.log(`showModal before: ${showModal}`);
    if (showModal == false) {
      setShowModal(true);
    }
    console.log(`showModal after: ${showModal}`);
  }
  const handleCancel = () => {
    console.log("Cancel button clicked");
    console.log(`showModal before: ${showModal}`);
    setShowModal(false);
    console.log(`showModal after: ${showModal}`);
  }
  const handleOk = () => {
    window.open(_codeSrc)
  }

  return (
    <Card title={_title} description={_description} onClick={handleClick}>
      <div className=" p-2 flex flex-row justify-evenly">
        <Image className="rounded-xl"
          src={_imageSrc}
          alt="img"
          width={500}
          height={200}
        />
      </div>
      {

        showModal === true ?
          <ProjectModal
            _title={_title}
            _okHandler={handleOk}
            _cancelHandler={handleCancel}
          >
            {children}
          </ProjectModal>
          : <></>
      }
    </Card>
  )
}