create database clinic;

create extension if not exists "uuid-ossp";

create table clinics(
    clinic_uid UUID not null primary key,
    clinic_name text not null
);

create table fields(
    field_uid UUID not null primary key,
    field_name varchar(50) not null,
    field_clinic_uid UUID default null,
    foreign key(field_clinic_uid)
        references clinics(clinic_uid)
            on delete cascade
);

create table customers(
    customer_uid UUID not null primary key,
    customer_fname text not null,
    customer_sname text not null,
    customer_email text not null,
    customer_password text not null,
    is_admin boolean default false
);

create table queues(
    queue_uid UUID not null primary key,
    queue_customer_uid UUID default null,
    foreign key(queue_customer_uid)
        references customers(customer_uid)
            on delete cascade,
    queue_field_uid UUID default null,
    foreign key(queue_field_uid)
        references fields(field_uid)
            on delete cascade
);
