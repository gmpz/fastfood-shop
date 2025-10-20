import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'

const FooterDetail = () => {
  return (
    <div className="flex justify-between w-full items-center gap-6">
            <div className="flex justify-center items-center">
              <Button
                variant="default"
                size="icon"
                className="w-8 h-8 rounded-full bg-gray-300"
                disabled
              >
                <Minus className="inline size-5" color="black" />
              </Button>

              <span className="mx-4 text-xl">1</span>
              <Button
                variant="default"
                size="icon"
                className="w-8 h-8 rounded-full bg-gray-300"
              >
                <Plus className="inline size-5" color="black" />
              </Button>
            </div>
            <div className="w-full">
              <Button className="w-full h-11 text-md bg-yellow-600 hover:bg-yellow-700 flex justify-between items-cente">
                <div>เพิ่มไปยังรายการ</div>
                <div>฿132</div>
              </Button>
            </div>
          </div>
  )
}

export default FooterDetail