CREATE TYPE public.account_type AS ENUM
    ('Client', 'Employee', 'Admin');

ALTER TYPE public.account_type
    OWNER TO db_340_db_340_demo_user;