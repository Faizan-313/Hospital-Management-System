import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import toast from "react-hot-toast"
import axios from 'axios';

function Dashboard() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        async function fecthPatientList(){
            try{
                const response = await axios.get(
                    "http://localhost:3000/admin/patient-list"
                )
                setStats(response.data);
            }catch(error){
                console.log(error);
                toast.error("something went wrong")
            }
        }
        fecthPatientList();
    }, []);

    const pendingAppointments = stats.filter((patient)=> patient.status != "completed");

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
                                <Typography variant="h4">{stats.length}</Typography>
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
                                <Typography variant="h4">{pendingAppointments.length}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>

            {/* Recent Appointments Table */}
            <Card className='h-[100vh]'>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Appointments</Typography>
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
                                {stats.map((appointment,index) => (
                                    <TableRow key={index}>
                                        <TableCell>{appointment.patient_name}</TableCell>
                                        <TableCell>{appointment.doctor_name}</TableCell>
                                        <TableCell>{new Date(appointment.appointment_date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color:
                                                        appointment.status === 'completed' ? 'success.main' :
                                                            appointment.status === 'pending' ? 'warning.main' : 'info.main'
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

