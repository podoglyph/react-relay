import React, { Component } from 'react';
import axios from 'axios';

function Video() {
  let vidData = ''

  return (
    <div className="camera-feed">
      <img src='http://192.168.0.42:8888/stream' />
    </div>
  )
}

export default Video;
