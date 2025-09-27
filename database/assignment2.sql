-- Insert Tony Stark into account table
INSERT INTO account (first_name, last_name, email, password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Update Tony Stark account_type to "Admin"
UPDATE account
SET account_type = 'Admin'
WHERE email = 'tony@starkent.com';

-- Delete Tony Stark record
DELETE FROM account
WHERE email = 'tony@starkent.com';

-- Update GM Hummer description ("small interiors" → "a huge interior")
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- Inner Join to get sport cars
SELECT i.inv_make, i.inv_model, c.classification_name
FROM inventory i
INNER JOIN classification c
  ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

-- Update inv_image and inv_thumbnail file paths
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
