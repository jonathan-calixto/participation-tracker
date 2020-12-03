# == Schema Information
#
# Table name: students
#
#  id         :bigint           not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  group_id   :integer
#  teacher_id :integer          not null
#
# Indexes
#
#  index_students_on_group_id    (group_id) UNIQUE
#  index_students_on_teacher_id  (teacher_id) UNIQUE
#
class Student < ApplicationRecord

    validates :first_name, :last_name, presence: {message: 'Please enter a valid first and last name'}

    belongs_to :teacher,
        foreign_key: :teacher_id,
        class_name: :User


    belongs_to :group,
        foreign_key: :group_id,
        class_name: :Group
        

end
