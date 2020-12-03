class Api::StudentsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index
        @students = Student.all
        render 'api/students/index'
    end

    def show
        @student = Student.find(params[:id])
        render 'api/students/show'
    end

    def create
        @student = Student.new(student_params)
        
        if @student.save && @student.teacher_id == current_user.id
            render 'api/students/show'
        else
            render json: @student.errors.full_messages, status: 422
        end
    end

    def update
        @student = Student.find(params[:id])
        if @student.teacher_id == current_user.id && @student.update(student_params)
            render 'api/students/show'
        else
            render json: @student.errors.full_messages, status: 422
        end
    end

    def destroy
        @student = Student.find(params[:id])
        if @student.teacher_id == current_user.id
            @student.destroy
            render 'api/students/show'
        end
    end

    private

    def student_params
        params.required(:user).permit(:first_name, :last_name, :teacher_id, :group_id)
    end

end
