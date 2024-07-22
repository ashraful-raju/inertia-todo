import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { PropsWithChildren } from "react";

export default function Drawer({
    children,
    show = false,
    onClose = () => {},
}: PropsWithChildren<{
    children: React.ReactNode;
    show: boolean;
    onClose: CallableFunction;
}>) {
    const close = () => {
        onClose();
    };

    return (
        <Transition show={show} leave="duration-200">
            <Dialog as="div" id="modal" onClose={close}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/75" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-in duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <DialogPanel className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 md:w-96 lg:w-[32rem] dark:bg-gray-800">
                        {children}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
