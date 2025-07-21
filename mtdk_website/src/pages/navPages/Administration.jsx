import { useState } from 'react';

const administrationMembers = [
  {
    id: 1,
    name: 'Dr. John Smith',
    position: 'Principal',
    department: 'Administration',
    email: 'principal@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?principal'
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    position: 'Vice Principal',
    department: 'Administration',
    email: 'viceprincipal@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?viceprincipal'
  },
  {
    id: 3,
    name: 'Mr. David Williams',
    position: 'Registrar',
    department: 'Administration',
    email: 'registrar@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?registrar'
  },
  {
    id: 4,
    name: 'Ms. Emily Brown',
    position: 'Dean of Academics',
    department: 'Academics',
    email: 'dean@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?dean'
  },
  {
    id: 5,
    name: 'Mr. Robert Taylor',
    position: 'Finance Officer',
    department: 'Finance',
    email: 'finance@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?finance'
  },
  {
    id: 6,
    name: 'Dr. Lisa Wilson',
    position: 'Head of Student Affairs',
    department: 'Student Services',
    email: 'studentaffairs@mtkd.edu',
    image: 'https://source.unsplash.com/random/300x300/?studentaffairs'
  }
];

export default function Administration() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  
  const departments = ['all', 'Administration', 'Academics', 'Finance', 'Student Services'];
  
  const filteredMembers = activeDepartment === 'all' 
    ? administrationMembers 
    : administrationMembers.filter(member => member.department === activeDepartment);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Administration</h1>
          <p className="text-xl">Meet our dedicated administrative team</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map(department => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`px-4 py-2 rounded-full capitalize ${activeDepartment === department ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {filteredMembers.length === 0 ? (
            <p className="text-center text-gray-600">No members found in this department</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 mb-3">{member.department}</p>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-blue-600 hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
