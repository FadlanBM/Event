import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

function Event({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Management Event
                </h2>
            }
        >
            <Head title="Management Event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="font-bold text-xl">Tambah Event</h1>
                            <div className="mt-3 ml-10">
                                <label
                                    htmlFor="my-modal-3"
                                    className="btn btn-primary"
                                >
                                    Tambah Event{" "}
                                    <span className="ml-2 mb-1 text-2xl">
                                        +
                                    </span>
                                </label>
                            </div>
                            {/* Put this part before </body> tag */}
                            <input
                                type="checkbox"
                                id="my-modal-3"
                                className="modal-toggle"
                            />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label
                                        htmlFor="my-modal-3"
                                        className="btn btn-sm btn-circle absolute right-2 top-2"
                                    >
                                        ✕
                                    </label>
                                    <div className="title text-2xl mb-10">
                                        <h1>Form Tambah Event</h1>
                                    </div>
                                    <form action="">
                                        <div className="mt-3">
                                            <h1 className="font-medium mb-2">
                                                Nama Event
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Masukkan Nama Event"
                                                className="input input-bordered input-secondary w-full "
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <h1 className="font-medium mb-2">
                                                Tujuan Event
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Masukkan tujuan event"
                                                className="input input-bordered input-secondary w-full "
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <h1 className="font-medium mb-2">
                                                Tanggal Event
                                            </h1>
                                            <input
                                                type="date"
                                                className="input input-bordered input-secondary w-full "
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <h1 className="font-medium mb-2">
                                                Waktu
                                            </h1>
                                            <input
                                                type="time"
                                                className="input input-bordered input-secondary w-full "
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <h1 className="font-medium mb-2">
                                                Description Event
                                            </h1>
                                            <textarea
                                                className="textarea textarea-primary w-full"
                                                placeholder="Masukkan Description Event"
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Event;
