import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';

const AddServices = () => {
    const axisoSecure = useAxiosSecure()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const sortDescription = form.sortDescription.value;
        const serviceDetails = form.serviceDetails.value;
        const catagory = form.catagory.value;
        const product = {name, price,image,sortDescription,serviceDetails,catagory};
        console.log(product)
        // axisoSecure.post('/services', product)

    }
    return (
        <div>

            <div>
                <div className="card flex-shrink-0 w-full border-4">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className='text-center text-4xl font-semibold'>Add A New Services</h1>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Services Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name='image' placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Catagory</span>
                                </label>
                                <select name='catagory' className="select select-bordered w-full max-w-xs">
                                    <option disabled defaultValue={'none'} selected>Selected Catagory</option>
                                    <option value={'accounts'}>Accounts</option>
                                    <option value={'vcc'}>VCC</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Sort Description</span>
                                </label>
                                <textarea type="text" name='sortDescription' placeholder="Sort Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Services Details</span>
                                </label>
                                <textarea type="text" name='serviceDetails' placeholder="Services Details" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex justify-between gap-5'>

                            
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddServices;