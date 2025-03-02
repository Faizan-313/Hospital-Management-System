import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { NavLink } from 'react-router-dom';


const generateRandomData = () => {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'James', 'Linda'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Wilson', 'Taylor', 'Davis', 'Miller'];
    const doctors = ['Dr. Smith', 'Dr. Wilson', 'Dr. Brown', 'Dr. Taylor', 'Dr. Miller'];
    const statuses = ['Completed', 'Pending', 'In Progress'];

    return Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        patient: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        doctor: doctors[Math.floor(Math.random() * doctors.length)],
        date: new Date(Date.now() + Math.floor(Math.random() * 10) * 86400000).toISOString().split('T')[0],
        status: statuses[Math.floor(Math.random() * statuses.length)]
    }));
};

function Dashboard() {
    const [stats, setStats] = useState({
        patients: 0,
        appointments: 0,
        doctors: 0,
        rooms: 0
    });

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Generate random stats
        setStats({
            patients: Math.floor(Math.random() * 1000) + 500,
            appointments: Math.floor(Math.random() * 200) + 50,
            doctors: Math.floor(Math.random() * 50) + 20,
            rooms: Math.floor(Math.random() * 150) + 100
        });

        // Generate random appointments
        setAppointments(generateRandomData());
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            {/* Stats Cards */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                mb: 4,
                '& > *': { flex: '1 1 200px', minWidth: '200px' }
            }}>
                <Card>
                    <CardContent>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <PeopleIcon fontSize="large" color="primary" />
                            <div>
                                <Typography variant="h6">Total Patients</Typography>
                                <Typography variant="h4">{stats.patients.toLocaleString()}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <CalendarTodayIcon fontSize="large" color="secondary" />
                            <div>
                                <Typography variant="h6">Appointments</Typography>
                                <Typography variant="h4">{stats.appointments}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <MedicalServicesIcon fontSize="large" color="success" />
                            <div>
                                <Typography variant="h6">Doctors</Typography>
                                <Typography variant="h4">{stats.doctors}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <BedIcon fontSize="large" color="action" />
                            <div>
                                <Typography variant="h6">Rooms</Typography>
                                <Typography variant="h4">{stats.rooms}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>

            {/* Recent Appointments Table */}
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Recent Appointments</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Patient Name</TableCell>
                                    <TableCell>Doctor</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.map((appointment) => (
                                    <TableRow key={appointment.id}>
                                        <TableCell>{appointment.patient}</TableCell>
                                        <TableCell>{appointment.doctor}</TableCell>
                                        <TableCell>{appointment.date}</TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        appointment.status === 'Completed' ? 'success.main' :
                                                            appointment.status === 'Pending' ? 'warning.main' : 'info.main'
                                                }}
                                            >
                                                {appointment.status}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Dashboard;

