/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useState, useEffect, useCallback } from 'react';
import CTALogic from '../../../components/CTA/CTALogic';
import { VideoPlayerAPI } from '@carbon/ibmdotcom-services';

/**
 * utilizes the videoplayerAPI to extract video data and
 * returns video title with duration for CTA
 *
 * @param {object} otherProps otherprops
 * @param {string} style style of CTA
 * @param {string} type type of CTA
 * @returns {*} JSX Object
 */
function useVideoData(otherProps, style, type) {
  const [videoTitle, setVideoTitle] = useState([{ title: '', key: 0 }]);

  useEffect(() => {
    getVideoData();
  }, [getVideoData, style, type]);

  /**
   * retrieve duration and title information from the video if
   * the type of the CTA is `video`
   *
   * sets the `videoTitle` state with an array of title objects
   *
   */
  const getVideoData = useCallback(async () => {
    if (type === 'video' || type.includes('video')) {
      const videoId = CTALogic.getVideoId(style, otherProps);
      const title = await Promise.all(
        videoId.map(async vidId => {
          const video = await VideoPlayerAPI.api(vidId.src);
          const time = VideoPlayerAPI.getVideoDuration(video.msDuration);
          return {
            title: `${video.name} ${time}`,
            key: vidId.key,
          };
        })
      );
      setVideoTitle(title);
    }
  }, [otherProps, style, type]);

  return videoTitle;
}

export default useVideoData;
