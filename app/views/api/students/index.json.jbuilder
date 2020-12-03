@students.each do |student|
    json.set! student.id do 
        json.extract! student, :id, :first_name, :last_name, :teacher_id, :group_id
    end
end