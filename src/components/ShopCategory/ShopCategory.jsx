import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToy from '../SingleToy/SingleToy';

const ShopCategory = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://baby-toys-server-five.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    return (
        <div className='text-center'>
            <h2 className='text-3xl lg:text-5xl font-bold my-6'>Shop By Category</h2>
            <Tabs className='font-bold'>
                <TabList className='flex lg:gap-12 justify-center'>
                    <Tab>Wooden Toys</Tab>
                    <Tab>Stuffed Toys</Tab>
                    <Tab>Construction Toys</Tab>
                    <Tab>Transformer Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='w-3/4 mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            toys.map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            toys.map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            toys.map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            toys.map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;