import React, { ReactNode } from "react"
import { IceCreamCone } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type BadgeButtonProps = {
  children: ReactNode
}

const BadgeButton = ({ children }: BadgeButtonProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border md:left-6"
    >
      <IceCreamCone className="fill-[#9ff01d] stroke-1" />{" "}
      {children}
    </Badge>
  )
}

export default BadgeButton

