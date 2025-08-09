import dataSource from '../data-source';
import { DataSource, DataSourceOptions } from 'typeorm';

async function shemaCheck() {
  const options = {
    ...dataSource.options,
    host: 'localhost',
  } as DataSourceOptions;

  const source = new DataSource(options);
  await source.initialize();

  const sql = await source.driver.createSchemaBuilder().log();
  await source.destroy();

  if (sql.upQueries.length > 0) {
    const difference = sql.upQueries
      .map((query) => query.query + ';')
      .join('\n');

    console.error('Shema is not up to date:\n' + difference);
    process.exit(1);
  } else {
    console.log('Schema is up to date');
  }
}

shemaCheck().catch((err) => {
  console.error('Failed to check schema:', err);
  process.exit(1);
});
