
export const Form = () => {

    const handleClick = ()=> {
        console.log("Ay suavecito...")
    }


  return (
            <div className="pt-50">
                <form
                action="#"
                className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
                >
                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="name">Name</label>

                    <input
                    className="mt-1 w-full rounded-lg border-white-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="email">Email</label>

                    <input
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="message">Message</label>

                    <textarea
                    className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    ></textarea>
                </div>

                <button onClick={handleClick}
                    className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                    type="submit"
                >
                    Send Message
                </button>
                </form>
            </div>

  )
}


