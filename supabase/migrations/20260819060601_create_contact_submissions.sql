/*
# Create contact submissions and newsletter tables

1. New Tables
- `contact_submissions`: stores inquiries from the Contact page and "Book Free Trial" forms.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text, nullable)
  - interest (text, nullable — dropdown: class type or general inquiry)
  - message (text, nullable)
  - consent (boolean, default false — user agreed to be contacted)
  - source (text, default 'contact' — which form submitted: 'contact' or 'trial')
  - created_at (timestamptz, default now())
- `newsletter_subscribers`: stores email signups from the footer newsletter form.
  - id (uuid, primary key)
  - email (text, unique, not null)
  - created_at (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- This is a no-auth public business website: allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon — only the studio owner (via Supabase dashboard / service role) reads submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  interest text,
  message text,
  consent boolean DEFAULT false,
  source text DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter_subscribers"
ON newsletter_subscribers FOR INSERT
TO anon, authenticated WITH CHECK (true);
