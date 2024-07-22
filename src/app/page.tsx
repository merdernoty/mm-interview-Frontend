'use client'
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Container from '@/components/ui/container/Container';
import HomePage from "@/components/homePage/homePage";
function page() {

  return (
      <div>

          <div className=" mt-14 w-full h-96 bg-[#4a29a5]">
              <Spline
                  scene="https://prod.spline.design/apAdya2WRt3kXW27/scene.splinecode"
              />
          </div>

          <Container>
              <div className="mt-32">
                  <HomePage/>
              </div>

          </Container>


      </div>
  )
}

export default page