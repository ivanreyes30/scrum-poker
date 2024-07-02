print('########## Creating Database ##########')

db = db.getSiblingDB('scrum-poker')
db.createUser(
  {
    user: 'dev',
    pwd: 'hello_world',
    roles: [{ role: 'readWrite', db: 'scrum-poker' }],
  }
)

print('########## Done ##########')