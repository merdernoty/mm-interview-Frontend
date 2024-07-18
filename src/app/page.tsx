'use client'
import React from 'react'
import Container from '@/components/ui/container/Container';
import PreFooter from "@/components/ui/footer/PreFooter";
function page() {

  return (
      <div>
          <Container>
              <img  src={"https://i.pinimg.com/564x/4b/4a/4c/4b4a4c78ccae2a9de6d54d1922e53083.jpg"}/>
              <div className="mt-32 p-8 h-64 flex items-center justify-center relative bg-[#18181b]">
                  <div
                      className="absolute inset-0 bg-noise-light opacity-35 rounded-md"
                  />
                  <p className="text-white z-10">текстура</p>
              </div>



          </Container>
          <div className="mt-32">
          </div>
          <PreFooter>

          </PreFooter>

      </div>
  )
}

export default page