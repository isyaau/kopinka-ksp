import { Table,TableHead, TableHeader } from '@/components/ui/table'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Anggota',
        href: '/data-anggota',
    }
]
const Index = () => {

    const {anggotas}:any = usePage().props

    useEffect(()=>{
        console.log(anggotas);
    },[])
        

  return (
<AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Data Anggota"/>
    <Table>
        <TableHeader>
            <TableHead className='w-10 text-center'>No</TableHead>
            <TableHead>Nomor Anggota</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Jenis Kelamin</TableHead>
            <TableHead>Usia</TableHead>
            <TableHead className='w-32 text-center'>Opsi</TableHead>
        </TableHeader>
    </Table>
</AppLayout> 
  )
}

export default Index
