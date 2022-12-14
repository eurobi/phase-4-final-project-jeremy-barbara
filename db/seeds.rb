# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(username: 'Jeremy', password: 'Jeremy', password_confirmation: 'Jeremy')
# User.create(username: 'Nate', password: 'Nate', password_confirmation: 'Nate')
# User.create(username: 'Jordan', password: 'Jordan', password_confirmation: 'Jordan')
# User.create(username: 'Alex', password: 'alex', password_confirmation: 'alex')

Quiz.create(title: "2000's NFL Running Backs", user_id: 1, 
    questions: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Adrian_Peterson.jpg/220px-Adrian_Peterson.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Peyton_Hillis_2012.JPG",
        "https://cdn.bleacherreport.net/images_root/slides/photos/000/444/837/95831444_original.jpg?1287088723",
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-06/220601-Marion-Barber-III-obit-2007-ac-900p-3b15cc.jpg",
        "https://thespun.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMTA2MjM3NzMzMjE3ODQ1/new-york-jets-v-maimi-dolphins.jpg"
    ],
    answers: [
        "Adrian Peterson",
        "Peyton Hillis",
        "LaDanian Timlinson",
        "Marion Barber",
        "Thomas Jones"
    ]
)

Quiz.create(title: "2000's NFL Running Backs part 2 test", user_id: 2, 
    questions: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Adrian_Peterson.jpg/220px-Adrian_Peterson.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Peyton_Hillis_2012.JPG",
        "https://cdn.bleacherreport.net/images_root/slides/photos/000/444/837/95831444_original.jpg?1287088723",
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-06/220601-Marion-Barber-III-obit-2007-ac-900p-3b15cc.jpg",
        "https://thespun.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMTA2MjM3NzMzMjE3ODQ1/new-york-jets-v-maimi-dolphins.jpg"
    ],
    answers: [
        "Adrian Peterson",
        "Peyton Hillis",
        "LaDanian Timlinson",
        "Marion Barber",
        "Thomas Jones"
    ]
)

