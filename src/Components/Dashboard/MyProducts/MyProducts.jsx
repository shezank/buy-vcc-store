import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';
import swal from 'sweetalert';
import { FaTrash } from 'react-icons/fa';

const MyProducts = () => {
    const axiosSecure = useAxiosSecure()
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handeleDelete =  service => {
        console.log(service._id);
        swal({
            title: "Are you sure?",
            text: `You Want To Deleted Your ${service.name} Booking`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/services/${service._id}`)
                        .then(res => {
                            if (res.data) {
                                swal(`Your ${service.name} Service has been Deleted!`, {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal(`Your ${service.name} Service is safe!`);
                }
            });
    }
    
return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Catagory</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {
                    services.map(service =>
                        <tr key={service._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={service.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {service.catagory}
                            </td>
                            <td>{service.price}</td>
                            <th>
                                <button onClick={() => handeleDelete(service)} className="btn btn-ghost btn-lg"><FaTrash/></button>
                            </th>
                        </tr>
                    )
                }

            </tbody>
        </table>
    </div>
    
);
};

export default MyProducts;