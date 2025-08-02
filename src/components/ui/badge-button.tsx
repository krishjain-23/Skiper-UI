import React from "react"
import { IceCreamCone, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = ({children}) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border  md:left-6"
    >
      <IceCreamCone className=" fill-[#9ff01d] stroke-1 " />{" "}
      {children}
    </Badge>
  )
}

export default BadgeButton
