-- migrate:up
BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
    ON public.contact_messages (created_at DESC);

COMMIT;

-- migrate:down
BEGIN;

DROP TABLE IF EXISTS public.contact_messages;

COMMIT;
