json.array! @guests do |guest|
    if guest.age < 40 || guest.age > 50
        next
    end
    json.partial! '/api/guests/guest', guest: guest
end
