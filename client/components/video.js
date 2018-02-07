import React, { Component } from 'react';
import axios from 'axios';

function Video() {
  let vidData = ''

  return (
    <div className="container camera-feed">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <img src='http://192.168.0.42:8888/camera' />
        </div>
      </div>
    </div>
  )
}

export default Video;
