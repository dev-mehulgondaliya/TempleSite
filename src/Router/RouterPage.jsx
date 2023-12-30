import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import Page404 from '../Pages/Page404/Page404'
import AboutTemplePage from '../Pages/About/AboutTemplePage'
import AboutTrustPage from '../Pages/About/AboutTrustPage'
import CampusFacilityPage from '../Pages/About/CampusFacilityPage'
import HistoryPage from '../Pages/About/HistoryPage'
import HowToReachPage from '../Pages/About/HowToReachPage'
import BlogPage from '../Pages/Blog/BlogPage'
import BlogDetails from '../Pages/Blog/BlogDetails'
import EventPage from '../Pages/Events/EventPage'
import VideoGallery from '../Pages/Gallery/VideoGallery'
import PhotoGallery from '../Pages/Gallery/PhotoGallery'
import PressReleasePage from '../Pages/Media/PressReleasePage'
import DonationPage from '../Pages/Services/DonationPage'
import BookingPage from '../Pages/Services/BookingPage'
import MagazinePage from '../Pages/Services/MagazinePage'
import ContactPage from '../Pages/Contact/ContactPage'
import Layout from '../Components/Layout/Layout'
import Download from '../Pages/Download/download'

function RouterPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/*' element={<Page404 />} />
          <Route path='/' element={<HomePage />} />

          {/* aboutepage */}
          <Route path='/abouttrust' element={<AboutTrustPage />} />
          <Route path='/abouttemple' element={<AboutTemplePage />} />
          <Route path='/campusfacility' element={<CampusFacilityPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/howtoreach' element={<HowToReachPage />} />

          {/* blog */}
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blogdetails/:id' element={<BlogDetails />} />

          {/* events */}
          <Route path='/events' element={<EventPage />} />

          {/* gallery */}
          <Route path='/videogallery' element={<VideoGallery />} />
          <Route path='/photogallery' element={<PhotoGallery />} />

          {/* media */}
          <Route path='/pressrelease' element={<PressReleasePage />} />
          <Route path='/download' element={<Download />} />

          {/* services */}
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/donation' element={<DonationPage />} />
          <Route path='/magazine' element={<MagazinePage />} />


          {/* contact */}
          <Route path='/contact' element={<ContactPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default RouterPage