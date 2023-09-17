import React from 'react'

export default function Local() {
  return (
    <div className="module-container ask-a-local-homepage">
<h2 className="ask-a-local-homepage__heading">Ask a Local</h2>
<div className="ask-a-local-homepage--content">
{/* <div className="ask-a-local-homepage__media"> */}
<div className="inline-video">
<div className="inline-video__video playing">
{/* <img src="/sites/default/files/styles/16_9_1280x720/public/2018-08/983cf8aed3fc49e3f7b847ee8a451e33.png?itok=SBqq6l1r" title="St. Croix local" alt="St. Croix local" className=" inline-video--cover" loading="lazy"/> */}
{/* <div className="image__hover" title="St. Croix local">
<span className="image__hover-text">View more</span>
</div> <div className="media__video-icon"></div> */}
<iframe data-video-src="https://www.youtube.com/watch?v=ehcI_h0kMVI&amp;feature=youtu.be" className="inline-video--video" frameBorder="0" data-gtm-yt-inspected-2532899_62="true" data-gtm-yt-inspected-8="true" src="https://www.youtube.com/embed/ehcI_h0kMVI?feature=youtu.be&amp;autoplay=1&amp;enablejsapi=1&amp;rel=0&amp;playsinline=1"></iframe>
</div>
</div>

<div className="ask-a-local-homepage--related">
<div className="ask-a-local-homepage--info">
<h4 className="ask-a-local-homepage__subtitle">Get the best recommendations from locals who love their cities</h4>
<p className="ask-a-local-homepage__description"></p><p>In each and every destination, you will find information, advice, and experiences from locals. Learn about the latest recommendations on attractions, places to eat, shop and much more.</p>
<p></p>
<a className="button" href="/ask-a-local">View all videos</a>
</div>
{/* <div className="ask-a-local-homepage--meta">
<div className="ask-a-local-homepage__tags">
<p className="ask-a-local-homepage__items-label">Explore destinations</p>
<ul className="ask-a-local-homepage__tags--list">
<li className="ask-a-local-homepage__tags--item">
<a href="https://www.gousa.in/state/us-virgin-islands">U.S. Virgin Islands</a>
</li>
<li className="ask-a-local-homepage__tags--item">
<a href="https://www.gousa.in/destination/st-croix">St. Croix</a>
</li>
<li className="ask-a-local-homepage__tags--item">
<a href="https://www.gousa.in/destination/st-john">St. John</a>
</li>
<li className="ask-a-local-homepage__tags--item">
<a href="https://www.gousa.in/destination/st-thomas">St. Thomas</a>
</li>
</ul>
</div>
</div> */}

</div>
</div>
</div>
  )
}
