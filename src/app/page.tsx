'use client'
import React from 'react'
import Container from '@/components/ui/container/Container';
import PreFooter from "@/components/ui/footer/PreFooter";
import HomePage from "@/components/homePage/homePage";
function page() {

  return (
      <div>

          <div className=" mt-14 w-full h-96 bg-purple-950">

          </div>
          <Container>
              <div className="mt-32">
                  <HomePage/>
              </div>

          </Container>

          <PreFooter>

          </PreFooter>
      </div>
  )
}

export default page