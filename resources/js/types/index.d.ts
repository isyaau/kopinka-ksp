import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface Links {
    url:string;
    label:string;
    active:boolean;
}

export interface Meta {
    current_page:number;
    from:number;
    last_page:number;
    next:string;
    prev:string;
    links: Links[];
    path:string;
    per_page:number;
    to:number;
    total:number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Anggota {
    id:number;
    nomor_anggota:string;
    nama_lengkap:string;
    alamat:string;
    nomor_telepon:string;
    jenis_kelamin:'Laki-laki' | 'Perempuan';
    tanggl_lahir:string;
    pekerjaan:string;
    nomor_ktp:string;
    usia:string;

}
