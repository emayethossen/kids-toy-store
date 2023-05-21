import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToy from '../SingleToy/SingleToy';

const ShopCategory = () => {

    const [toys, setToys] = useState([])
    const [woodenToys, setWoodenToys] = useState([])
    const [stuffedToys, setStuffedToys] = useState([])
    const [constructionToys, setConstructionToys] = useState([])
    const [transformerToys, setTransformerToys] = useState([])

    useEffect(() => {
        const subCategory = toys.filter(ty => ty.category == 'Wooden Toys');
        setWoodenToys(subCategory);
    }, [toys])

    useEffect(() => {
        const subCategory = toys.filter(ty => ty.category == 'Stuffed Toys');
        setStuffedToys(subCategory);
    }, [toys])

    useEffect(() => {
        const subCategory = toys.filter(ty => ty.category == 'Construction Toys');
        setConstructionToys(subCategory);
    }, [toys])

    useEffect(() => {
        const subCategory = toys.filter(ty => ty.category == 'Transformer Toys');
        setTransformerToys(subCategory);
    }, [toys])

    useEffect(() => {
        fetch('https://baby-toys-server-five.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    return (
        <div className='text-center lg:mx-16'>
            <h2 className='text-3xl lg:text-5xl font-bold my-6 text-[#FF69B4]'>Shop By Category</h2>
            <Tabs className='font-bold'>
                <TabList className='grid lg:grid-cols-4 grid-cols-2 lg:gap-12 justify-center'>
                    <Tab>Wooden Toys</Tab>
                    <Tab>Stuffed Toys</Tab>
                    <Tab>Construction Toys</Tab>
                    <Tab>Transformer Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            woodenToys.slice(0, 3).map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            stuffedToys.slice(0, 3).map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            constructionToys.slice(0, 3).map(ty => <SingleToy
                                key={ty._id}
                                ty={ty} />)
                        }
                    </div> 
                </TabPanel>
                <TabPanel>
                    <div className='w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6'>
                        {
                            transformerToys.slice(0, 3).map(ty => <SingleToy
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