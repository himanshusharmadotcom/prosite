import React from 'react'

const HomeHeader = () => {
    return (
        <div className='container'>
            <div className="h-28 w-full rounded-sm bg-white drop-shadow-md">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 sm:col-span-4">
                        <p className='text-3xl font-bold'>Prosite</p>
                    </div>

                    <div class="col-span-12 sm:col-span-8 sm:grid sm:grid-cols-3 sm:gap-4">
                        <div class="bg-green-500">Column 2</div>
                        <div class="bg-yellow-500">Column 3</div>
                        <div class="bg-red-500">Column 4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader