import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold my-6 text-white'>Shop By Category</h2>
            <Tabs className='font-bold'>
                <TabList className='flex lg:gap-12 justify-center'>
                    <Tab>Wooden Toys</Tab>
                    <Tab>Stuffed Toys</Tab>
                    <Tab>Construction Toys</Tab>
                    <Tab>Transformer Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;