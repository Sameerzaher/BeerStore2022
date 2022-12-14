from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserProfileSerializer, ProductsSerializer, SuppliersSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from .models import UserProfile, Products, Suppliers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect

from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import authenticate, login


@csrf_exempt
@csrf_protect
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid login credentials'})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    @action(detail=True, methods=['POST'])
    def getuser(self, request, pk=None):
        user = User.object.get(id=pk)


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    authentication_classes = (TokenAuthentication, )

    @permission_classes([IsAuthenticated])
    @action(detail=True, methods=['POST'])
    def createUserProfile(self, request, pk=None):
        print("inside create user profile")
        # get the given username
        username = request.data['username']
        # get the user from DB  by the given username
        getUser = User.objects.filter(username=username)
        # get the values of first name and last name
        givenFirstName = ' '
        givenLastName = ' '
        if 'firstName' in request.data:
            givenFirstName = request.data['firstName']
        if 'lastName' in request.data:
            givenLastName = request.data['lastName']

        newUser = UserProfile.objects.create(
            user=getUser[0], username=username, firstName=givenFirstName, lastName=givenLastName, email='', userType='')
        newUser.save()
        print("user is: ", newUser)

        response = {'message': 'created', 'results': newUser}
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def getUserByUsername(self, request, pk=None):
        username = request.data['username']
        arr = []
        u = UserProfile.objects.get(username=username)

        serializers = UserProfileSerializer(u, many=False)

        response = {'message': 'Get', 'results': serializers.data}
        print("response:", response)
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def getUserDetails(self, request, pk=None):
        print("im here")
        user = request.user
        print("user from query is: ", user)
        arr = []
        u = UserProfile.objects.get(user=user)
        # print("user mail is: ", u.email)
        print("user name is: ", u.firstName)
        print("user surname is: ", u.lastName)
        # userDetails= User.objects.filter(user=user.id, course=pk)
        # for userCourse in userCourses:
        u.username = user
        serializers = UserProfileSerializer(u, many=False)
        #     arr.append(serializers.data)

        response = {'message': 'Get', 'results': serializers.data}
        return Response(response, status=status.HTTP_200_OK)
    # samir:
    # def UpdateUserDetails(self, request, pk=None):
    #         print("im here")
    #         user = request.user
    #         print("user from query is: ",user)
    #         arr=[]
    #         u = UserProfile.objects.get(user=user)
    #         # print("user mail is: ", u.email)
    #         print("user name is: ", u.firstName)
    #         print("user surname is: ", u.lastName)
    #         u.username=user
    #         serializers = UserProfileSerializer(u, many=False)
    #         response = {'message': 'Get', 'results': serializers.data}
    #         return Response (response, status=status.HTTP_200_OK)

# update the user's profile details
    @action(detail=True, methods=['POST'])
    def UpdateUserDetails(self, request, pk=None):

        # get the user by the authentication
        user = request.user
        # if getUserProfile get a value (len(getUserProfile) > 0) it means that
        # this object exist in DB and the user is trying to update that object.
        getUserProfile = UserProfile.objects.filter(user=user.id)
        try:
            # success if need to update

            profile = UserProfile.objects.get(id=getUserProfile[0].id)
            print("aaabbb ", getUserProfile[0].id)
            profile.user = user
            # get the new details
            firstName = request.data['firstName']
            lastName = request.data['lastName']
            aboutMe = request.data['aboutMe']
            hobbies = request.data['hobbies']
            myGoal = request.data['myGoal']
            # insert the new details in the new object
            profile.firstName = firstName
            profile.lastName = lastName
            profile.aboutMe = aboutMe
            profile.hobbies = hobbies
            profile.myGoal = myGoal

            profile.save()
            print("new profile is: ", profile)
            serializers = UserProfileSerializer(profile, many=False)
            response = {'message': 'Updated', 'results': serializers.data}
            return Response(response, status=status.HTTP_200_OK)
        except:
            # requested profile not found in DB
            response = {'message': 'error'}
            return Response(response, status=status.HTTP_200_OK)


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    #authentication_classes = (TokenAuthentication, )


class SuppliersViewSet(viewsets.ModelViewSet):
    queryset = Suppliers.objects.all()
    serializer_class = SuppliersSerializer
    #authentication_classes = (TokenAuthentication, )
