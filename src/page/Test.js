import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Test = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const renderContent = () => {
        if (activeTab === 'Home') {
            return <Text>Welcome to the Home page!</Text>;
        } else if (activeTab === 'Customers') {
            return <Text>Here are the customer details.</Text>;
        } else if (activeTab === 'Finances') {
            return <Text>Check out the financial information.</Text>;
        }
    };

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <TouchableOpacity onPress={() => handleTabPress('Home')}>
                    <Text style={{ fontWeight: activeTab === 'Home' ? 'bold' : 'normal' }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('Customers')}>
                    <Text style={{ fontWeight: activeTab === 'Customers' ? 'bold' : 'normal' }}>Customers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('Finances')}>
                    <Text style={{ fontWeight: activeTab === 'Finances' ? 'bold' : 'normal' }}>Finances</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>{renderContent()}</View>
        </View>
    );
};

export default Test;
