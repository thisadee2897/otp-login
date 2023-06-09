import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4267B2',
    },
});

const SalesReport = ({ sale }) => {
    return (
        <Document>
            <Page>
                <Text style={styles.title}>Sales Report</Text>
                {/* เพิ่มโค้ดสำหรับแสดงข้อมูลการขายที่ต้องการ */}
            </Page>
        </Document>
    );
};

export default SalesReport;
