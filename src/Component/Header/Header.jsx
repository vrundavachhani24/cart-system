import React from "react"

const Header = ({Cart , handleSelectAll , selectItems , handleSearch , handledelete}) => {

    return (
        <div>
            <div>
                <div>
                    <div className='flex align justify-between items-center gap-5 m-5 p-3 border-gray-200 max-[476]:align-center max-sm:grid max-sm:top-0 max-sm:absolute max-sm:text-white max-sm:m-0 max-sm:bg-gray-500 max-sm:w-full max-sm:text-center max-sm:fixed'>
                        <div>
                            <p className='flex items-center gap-2'>
                                <input type="checkbox" className="w-5 h-5 accent-blue-800" onChange={handleSelectAll}
                                    checked={selectItems.length === Cart.length && Cart.length !== 0} />
                                Select All</p>
                        </div>
                        <div className='flex gap-10 max-sm:grid'>
                            <input type="search" placeholder="Search Products" onChange={(e) => handleSearch(e.target.value)} className="border-1 p-2 w-sm" />
                            <button className='flex items-center gap-2 bg-blue-800 text-white rounded-xl p-2 cursor-pointer'>Edit</button>
                            <button className='flex items-center gap-2 bg-blue-800 text-white rounded-xl p-2 cursor-pointer' onClick={handledelete}>Delete</button>
                        </div>
                        <div>
                            <button className='bg-blue-800 p-3 text-white rounded-3xl flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                            </svg>Add Product</button>
                        </div>
                    </div>
                </div>
                <button type="btn" className='max-sm:block hidden p-2 m-3'>
                    Menu</button>
            </div>
        </div>
    )
}

export default Header