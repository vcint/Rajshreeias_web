// Database migration test script
const testMigration = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/migrate-database', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const result = await response.json();
    console.log('Migration Result:', JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log('Migration completed successfully.');
    } else {
      console.log('Migration failed with status:', response.status);
    }
  } catch (error) {
    console.error('Migration request failed:', error.message);
  }
};

testMigration();