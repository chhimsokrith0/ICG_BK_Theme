"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import TabToggle from "./TabToggleProps"
import MobileInput from "./MobileInputProps"
import EmailInput from "./email-input"

interface GetUsernameModalProps {
    isOpen: boolean
    onClose: () => void
}

const GetUsernameModal: React.FC<GetUsernameModalProps> = ({ isOpen, onClose }) => {
    const [isMobileSelected, setIsMobileSelected] = React.useState(true)

    if (!isOpen) return null

    return createPortal(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <DialogContent className="sm:max-w-[425px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-center">
                            <div className="flex justify-center items-center gap-4 mb-4">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
                                    alt="BK8 Logo"
                                    className="h-12"
                                />
                            </div>
                            Get Username
                        </DialogTitle>
                        <p className="text-center text-sm text-muted-foreground">
                            Enter your registered email address or contact number to receive instructions on how to reset your
                            password.
                        </p>
                    </DialogHeader>
                    <TabToggle isMobileSelected={isMobileSelected} setIsMobileSelected={setIsMobileSelected} />
                    {isMobileSelected ? <MobileInput onClose={onClose} /> : <EmailInput onClose={onClose} />}
                </DialogContent>
            </div>
        </Dialog>,
        document.body,
    )
}

export default GetUsernameModal

