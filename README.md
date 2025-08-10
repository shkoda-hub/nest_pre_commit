## Steps to reproduce

1. Add new .env in the root of the project (see .env.example)

2. Firstly up server and db

```bash
npm run up:dev
```

3. Run migrations

```bash
POSTGRES_HOST=localhost npm run migration:run 
```

4. Execute a check script. There will be 'Schema is up to date' log

```bash
npm run schema:check
```

5. Edit a user entity (for example, add new column)
6. Try to execute the check script again
```bash
npm run schema:check
```
7. You will see script like that:
   Shema is not up to date:
   ALTER TABLE "user" ADD "email" character varying(255) NOT NULL;


   test
